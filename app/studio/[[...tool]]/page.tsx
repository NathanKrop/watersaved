import { NextStudio, metadata, viewport } from "next-sanity/studio";
import config from "@/sanity.config";
import { sanityConfigured } from "@/lib/sanity/client";

export { metadata, viewport };
export const dynamic = "force-static";

export default function StudioPage() {
  return (
    <div className="sanity-studio fixed inset-0 z-[100] bg-white">
      {sanityConfigured ? (
        <NextStudio config={config} />
      ) : (
        <section role="status" className="mx-auto flex h-full max-w-2xl flex-col justify-center px-6 text-center text-neutral-900">
          <h1 className="text-2xl font-semibold">Connect your Sanity project</h1>
          <p className="mt-3 text-neutral-600">
            Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET to open the editor.
          </p>
        </section>
      )}
    </div>
  );
}