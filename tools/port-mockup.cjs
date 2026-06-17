const fs = require('fs');
const src = fs.readFileSync('/Users/sunny/Projects/locully/homepage-mockup.html','utf8');

// 1) Extract <style> and scope every selector under .lcm so it can't leak to other pages
const style = src.match(/<style>([\s\S]*?)<\/style>/)[1];
function scopeSel(sel){
  sel = sel.replace(/\/\*[\s\S]*?\*\//g,'').trim();
  if(!sel) return '';
  if(sel===':root'||sel==='html'||sel==='body') return '.lcm';
  return '.lcm '+sel;
}
function scopeCss(css){
  let out='', i=0, n=css.length;
  while(i<n){
    let j=i;
    while(j<n && css[j]!=='{' && css[j]!=='}') j++;
    if(j>=n){ out+=css.slice(i); break; }
    if(css[j]==='}'){ out+=css.slice(i,j+1); i=j+1; continue; }
    const header=css.slice(i,j);
    let depth=1,k=j+1;
    while(k<n && depth>0){ if(css[k]==='{')depth++; else if(css[k]==='}')depth--; k++; }
    const body=css.slice(j+1,k-1);
    const h=header.replace(/\/\*[\s\S]*?\*\//g,'').trim();
    if(h.startsWith('@keyframes')||h.startsWith('@-webkit-keyframes')||h.startsWith('@font-face')){
      out+=header+'{'+body+'}';
    } else if(h.startsWith('@media')||h.startsWith('@supports')){
      out+=header+'{'+scopeCss(body)+'}';
    } else {
      out+=header.split(',').map(scopeSel).filter(Boolean).join(', ')+' {'+body+'}';
    }
    i=k;
  }
  return out;
}
const scoped = '/* AUTO-GENERATED from homepage-mockup.html — do not edit by hand */\n'+scopeCss(style);
fs.writeFileSync('src/home-scoped.css', scoped);

// 2) Extract <body>, strip the mockup's own nav, footer, script (we use the shared Nav + React Footer)
let body = src.match(/<body[^>]*>([\s\S]*?)<\/body>/)[1];
body = body.replace(/<style[\s\S]*?<\/style>/gi, ''); body = body.replace(/<nav>[\s\S]*?<\/nav>/, '');         // mockup nav -> shared <Nav>
body = body.replace(/<footer>[\s\S]*?<\/footer>/, '');   // mockup footer -> React <Footer>
body = body.replace(/<script>[\s\S]*?<\/script>/g, '');  // JS re-implemented in useEffect
body = body.replace(/<!--[\s\S]*?-->/g, '');             // strip comments
fs.writeFileSync('src/home-content.html', body.trim());

console.log('scoped css:', scoped.length, 'bytes | html:', body.trim().length, 'bytes');
console.log('sanity — html has hero:', /class="hero"/.test(body), '| score tool:', /id="scoreCard"/.test(body), '| nav removed:', !/<nav>/.test(body), '| footer removed:', !/<footer>/.test(body));
