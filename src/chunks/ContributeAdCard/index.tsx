import Image from 'next/image';
import Button from '@/components/Button';
import ContentWriter from '@/images/content-writer.jpg';

export default function ContributeAdCard() {
  return (
    <aside className="flex flex-col gap-8 self-center rounded-md bg-white shadow-lg dark:bg-neutral-800 dark:text-light xl:flex-row">
      <Image
        src={ContentWriter}
        alt="A technical content writer"
        className="self-center xl:self-stretch xl:rounded-r-md"
        width={640}
        height={427}
      />
      <div className="flex flex-col gap-8 p-8 xl:-order-1">
        <h1 className="text-2xl font-semibold">Become a contributor</h1>
        <p>
          Are you passionate about technology? Do you love breaking down complex
          concepts into simple, understandable terms? Join our vibrant community
          of technical writers and contribute to our blog! We&apos;re looking
          for enthusiastic individuals who can demystify the latest trends in
          tech, share valuable insights, and help our readers stay ahead in this
          ever-evolving digital landscape. Whether you&apos;re a seasoned
          professional or a budding writer eager to dive into the world of
          technology, we welcome your unique perspective.
        </p>
        <p>
          Share your knowledge, hone your skills, and be part of a supportive
          network of tech enthusiasts. Join us today and let your voice be
          heard!
        </p>
        <Button className="self-start">Join us</Button>
      </div>
    </aside>
  );
}
