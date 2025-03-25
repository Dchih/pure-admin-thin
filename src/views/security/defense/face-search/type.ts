import type { PersonCardProps } from "@/views/population/person/moved-out/type";

export type ArchiveCardProps = PersonCardProps & {
  identity: string;
  similarity: number;
};
