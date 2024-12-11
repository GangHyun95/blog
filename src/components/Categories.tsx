type Props = {
    categories: string[];
    selected: string;
    onClick: (category: string) => void;
};
export default function Categories({ categories, selected, onClick }: Props) {
    return (
        <section className='text-center px-8 pb-4'>
            <h2 className='text-lg font-bold gradient-text gradient-border-bottom mb-2'>category</h2>
            <ul>
                {categories.map((category) => (
                    <li className={`cursor-pointer hover:text-sky-500  ${
                        category === selected && 'text-sky-500'
                    }`}
                    key={category} 
                    onClick={() => onClick(category)}>{category}</li>
                ))}
            </ul>
        </section>
    );
}
