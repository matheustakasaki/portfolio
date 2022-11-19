interface TechProps {
  nameImage: string;
  altTextTechImage: string;
  description: string;
}
export default function Tech(props: TechProps) {
  return (
    <section className='flex items-start h-auto gap-2 my-4 p-2'>
      <img src={props.nameImage} />

      <p>{props.description}</p>
    </section>
  );
}
