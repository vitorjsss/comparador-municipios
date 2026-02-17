function SmallCard({ title, content, footer }) {
    return (
        <div className="flex-1 p-8 bg-white rounded-xl shadow-sm flex flex-col gap-3">
            <h3 className="text-gray-600 font-medium text-sm uppercase tracking-wide">{title}</h3>
            <p className="text-gray-900 font-bold text-3xl my-2">{content}</p>
            <p className="text-gray-500 font-normal text-sm">{footer}</p>
        </div>
    )
}

export default SmallCard