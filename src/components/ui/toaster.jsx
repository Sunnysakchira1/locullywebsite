import {
	Toast,
	ToastClose,
	ToastDescription,
	ToastProvider,
	ToastTitle,
	ToastViewport,
} from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';
import React from 'react';

export function Toaster() {
	const { toasts } = useToast();

	return (
		<ToastProvider>
			{toasts.map(({ id, title, description, action, ...props }) => {
				return (
					<Toast key={id} {...props} className="lb-toast">
						<div className="grid gap-1">
							{title && <ToastTitle className="lb-toast-title">{title}</ToastTitle>}
							{description && (
								<ToastDescription className="lb-toast-desc">{description}</ToastDescription>
							)}
						</div>
						{action}
						<ToastClose />
					</Toast>
				);
			})}
			<ToastViewport className="lb-toast-viewport" />
		</ToastProvider>
	);
}