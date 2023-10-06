import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import usePhotos from "../services/getPhotos";
import ImageCard from "./Cards/ImageCard";
import SkeletonCard from "./Cards/SkeletonCard";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";

interface Props {
  search: string;
}
const Body = ({ search }: Props) => {
  const [page, setPage] = useState(1);
  const pageSize = 20;

  const {
    data: photos,
    error,
    isLoading,
  } = usePhotos({ page, pageSize, search });

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <SkeletonCard />;
  return (
    <>
      <main>
        {photos?.photos.map((photo) => (
          <ImageCard
            photographer={photo.photographer}
            image={photo.src.large2x}
            key={photo.id}
            alt={photo.alt}
          />
        ))}
      </main>
      <Stack direction="row" sx={{ ml: 1 }} spacing={1}>
        <Button
          onClick={() => setPage(page + 1)}
          startIcon={<FcPrevious />}
          color="secondary"
          variant="contained"
        >
          Previous
        </Button>
        <Button
          onClick={() => setPage(page + 1)}
          endIcon={<FcNext />}
          color="secondary"
          variant="contained"
        >
          Next
        </Button>
      </Stack>
    </>
  );
};

export default Body;
