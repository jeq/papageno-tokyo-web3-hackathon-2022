import Link from "next/link";

export default function Footer() {
  return (
    <div className="container mx-auto py-4 mt-2 flex items-center justify-between flex-wrap bottom-0 text-gray-700 sm:text-center">
      <copy className="mx-2 mb-2">&copy; 2022 Story Box</copy>
      
        <div className="items-center">
          <Link href="#" className="mx-2 mb-2">
            Privacy Policy
          </Link>
          <Link href="#" className="mx-2 mb-2">
            サービス利用規約
          </Link>
        </div>
      
    </div>
  );
}
