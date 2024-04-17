// client component
"use client"

interface ViewUserButtonProps {
  userId: number,
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({userId}) => {

    const handleClick = () => alert(`UserId ${userId}`);

  return (
    <>
        {/* client component */}
        <button onClick={handleClick}>Lihat User</button>
    </>
  )
}

export default ViewUserButton