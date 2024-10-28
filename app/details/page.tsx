// app/details/page.js
'use client';

import UserForm from "./_components/UserForm";


export default function DetailsPage() {
  return (
    <div>
      
      <main className="flex flex-grow flex-col">
  <div className="flex flex-grow flex-col">
    <div className="flex flex-grow flex-col">
      <div className="flex flex-grow flex-col items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <h1 className="mb-6 text-2xl font-bold">Create Portfolio</h1>
          <UserForm />
        </div>
      </div>
    </div>
  </div>
</main>

    </div>
  );
}
