import Link from 'next/link';

export default function ResetPassword() {
  return (
    <form className="flex flex-col gap-y-6 p-6 bg-semiwhite rounded">
      <div className="flex flex-col gap-y-1">
        <div className="font-semibold">ID</div>
        <input className="w-full py-1 bg-transparent border-b border-semigray outline-none" />
      </div>
      <div className="flex flex-col gap-y-1">
        <div className="font-semibold">Email</div>
        <input
          className="w-full py-1 bg-transparent border-b border-semigray outline-none"
          type="email"
        />
      </div>
      <button className="w-full py-1 bg-crimson border border-crimson rounded text-lg text-semiwhite">
        Reset Password
      </button>
      <Link className="mx-auto text-sm text-darkgray" href="/sign-in">
        Return to sign in.
      </Link>
    </form>
  );
}