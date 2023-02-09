export default function Footer({cookieStands}) {
  return (
    <footer className="p-4 mt-8 bg-emerald-500 text-emerald-50">
      {/* <Link href="/careers">Careers</Link> */}
      <p>{cookieStands.length} Locations World Wide</p>
    </footer>
  );
}
