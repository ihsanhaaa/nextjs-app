import Link from "next/link";
import AlbumList from "../components/Albums/AlbumList"
import ButtonView from "../components/Albums/ButtonView"
import SideBar from "./sideBar";

const url = "https://jsonplaceholder.typicode.com/posts";

interface Ialbums {
  userId: number,
  id: number,
  title: string,
  body: string
}

const Albums = async () => {
  const response = await fetch(url);
  const albums: Ialbums[] = await response.json();

  return (
    <>
      <div className="px-10 my-5 font-bold">Halaman Album</div>

      {albums.map((album) => {
        return (
          
          <AlbumList key={album.id}>
            <SideBar />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{album.title}</div>
              <p className="text-gray-700 text-base">
                {album.body}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <ButtonView id={album.id} />
            </div>
          </AlbumList>
        )
      })}
    </>
  )
}

export default Albums