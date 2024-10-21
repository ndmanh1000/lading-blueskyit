import PartnerHead from "./Partner-Head/PartnerHead";
import PartnerBody from "./Partner-Body/PartnerBody";

export default function Partner() {
  return (
    <div className="p-3  container mx-auto flex flex-col gap-7">
      <PartnerHead />
      <PartnerBody />
    </div>
  );
}
