"use client";

import { Dialog } from "@base-ui/react/dialog";
import ContactForm from "@/components/sections/ContactForm";

interface ContactModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ContactModal({ isOpen, onOpenChange }: ContactModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Popup className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-card p-6 shadow-2xl outline-none sm:p-8">
          <Dialog.Title className="text-2xl font-semibold text-foreground">
            Une discussion s&apos;impose !
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-sm text-muted-foreground">
            Avez-vous un projet que vous aimeriez réaliser ? Remplissez le formulaire et nous vous
            recontacterons dans les prochaines 24 heures ouvrables.
          </Dialog.Description>

          <div className="mt-6">
            <ContactForm variant="compact" />
          </div>

          <Dialog.Close
            className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Fermer"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </Dialog.Close>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
