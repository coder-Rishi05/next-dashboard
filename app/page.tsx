import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import {lusitana} from '@/app/ui/fonts';


export default function Page() {
  return (
    <>
      <p>Helo there it is inter font.</p>
      <h2 className={`${lusitana.className} antialiased`} >and this is luistiana font </h2>
    </>
  );
}
