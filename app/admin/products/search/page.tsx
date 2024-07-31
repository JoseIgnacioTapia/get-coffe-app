import Heading from '@/components/ui/Heading';

async function SearchPage({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  console.log(searchParams.search);

  return <Heading>Página de búsqueda</Heading>;
}

export default SearchPage;
