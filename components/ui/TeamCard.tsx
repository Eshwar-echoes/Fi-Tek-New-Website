import Image from "next/image";

export interface TeamCardProps {
  member: {
    id: string;
    name: string;
    title: string;
    image: string;
  };
  emphasis?: boolean;
}

export function TeamCard({ member, emphasis = false }: Readonly<TeamCardProps>) {
  return (
    <div
      className={`flex flex-col items-center text-center p-6 rounded-lg bg-(--surface-base) shadow-sm ${
        emphasis ? "border-2 border-(--border-strong)" : "border border-(--border-subtle)"
      }`}
    >
      <Image
        src={member.image}
        alt={member.name}
        width={96}
        height={96}
        className="rounded-full object-cover mb-4"
      />
      <h3 className={`text-lg font-semibold text-(--text-primary) mb-1 ${emphasis ? "text-xl" : ""}`}>{member.name}</h3>
      <p className="text-sm text-(--text-secondary)">{member.title}</p>
    </div>
  );
}
