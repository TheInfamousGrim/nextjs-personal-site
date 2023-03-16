import { Metadata } from 'next';

// Components
import { SimpleLayout } from '@/components/SimpleLayout';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in contact with me! I'm always open to work with people on awesome new stuff.`,
};

export default function Contact() {
  return (
    <SimpleLayout
      title="Get In Contact With Me If You Feel Like 😁"
      intro="I'm always open to new job opportunities or collaborating on some awesome new projects. Just fill out the form and I'll get back to you 💪."
    >
      <div>hello</div>
    </SimpleLayout>
  );
}
