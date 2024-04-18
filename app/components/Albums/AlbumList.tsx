const AlbumList = ({ children }: any) => {
    return (
        <>
            <div className="px-10 my-10">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    {children}
                </div>
            </div>
        </>
    )
}

export default AlbumList