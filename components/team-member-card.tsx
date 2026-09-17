import Image from "next/image";
import type { TeamMember } from "@/lib/types";

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex gap-4">
      <div className="w-16 h-16 shrink-0 overflow-hidden bg-forest-700 flex items-center justify-center font-display text-lg text-mist-50">
        {member.image ? (
          <Image src={member.image} alt={member.name} width={64} height={64} className="object-cover w-full h-full" />
        ) : (
          member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")
        )}
      </div>
      <div>
        <p className="font-display text-lg text-forest-900">{member.name}</p>
        <p className="text-sm text-clay-600">{member.role}</p>
        <p className="mt-1 text-sm text-ink-soft">{member.bio}</p>
      </div>
    </div>
  );
}

