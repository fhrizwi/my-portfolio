export default function Card({ title, tags, image, link }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="h-80 w-80 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center justify-center space-y-6 p-4 no-underline"
        >
            {/* Image Preview */}
            <div className="h-52 w-72 rounded-xl overflow-hidden bg-slate-200 flex items-center justify-center">
                {image ? (
                    <img src={image} alt={title} className="object-cover h-full w-full" />
                ) : (
                    <span className="text-gray-400 text-sm">No Image</span>
                )}
            </div>

            {/* Title + Tags */}
            <div className="w-full space-y-2">
                <h1 className="text-xl font-semibold text-center text-gray-800">
                    {title}
                </h1>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                    {tags.map((tag, index) => (
                        <button
                            key={index}
                            className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                                tag === 'UI/UX'
                                    ? 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                                    : 'bg-green-100 text-green-600 hover:bg-green-200'
                            }`}
                            disabled
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
        </a>
    );
}
