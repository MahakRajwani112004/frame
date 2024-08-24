import type { Metadata } from 'next';

// Custom function to handle frame metadata
function createFrameMetadata({ buttons, image, post_url }: { buttons: { label: string }[], image: string, post_url?: string }) {
  return {
    buttons,
    image,
    post_url,
  };
}

// Using the custom function to create frame metadata
const frameMetadata = createFrameMetadata({
  buttons: [
    {
      label: "Begin",
    },
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmRygcY6EYr1d57wkwrHDhqsQE1HzDc2BqTGNXuhNioLH1/0.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

// Next.js Metadata
export const metadata: Metadata = {
  title: 'Cosmic Cowboys',
  description: 'A frame telling the story of Cosmic Cowboys',
  openGraph: {
    title: 'Cosmic Cowboys',
    description: 'A frame telling the story of Cosmic Cowboys',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/Qme4FXhoxHHfyzTfRxSpASbMF8kajLEPkRQWhwWu9pkUjm/0.png`],
  },
 
};

export default function Page() {
  return (
    <>
      <h1>Cosmic Cowboys</h1>
    </>
  );
}
