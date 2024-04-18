"use client";

interface ViewAlbumProps {
    id: number,
  }

const ButtonView: React.FC<ViewAlbumProps> = ({id}) => {
    const handleClick = () => alert(`ID ${id}`);
  return (
    <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={handleClick}>Lihat Data</button>
  )
}

export default ButtonView