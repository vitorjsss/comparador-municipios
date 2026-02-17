function MediumCard({ title, children }) {
    return (
        <div className="flex-1 p-8 bg-white rounded-xl shadow-sm flex flex-col min-h-[350px]">
            <h3 className="text-gray-700 font-semibold text-lg mb-6">{title}</h3>
            {children && <div className="flex-1 w-full">{children}</div>}
        </div>
    )
}

export default MediumCard
