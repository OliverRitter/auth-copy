import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { FaRegSmile } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="text-3xl text-blue-100 font-semibold">
      <Button
        as={Link}
        href="members"
        color="primary"
        variant="bordered"
        className="text-2xl p-5 m-4"
        startContent={<FaRegSmile size={20} />}
      >
        Click me
      </Button>
    </div>
  );
}
