import { useQuery } from "@tanstack/react-query"
import axios from "axios"

interface Src {
    original: string
    large2x: string
    large: string
    medium: string
}
interface Photo {
    id: number
    photographer: string
    src: Src
    alt: string
}
interface Response {
    page: number
    per_page: number
    photos: Photo[]
}
interface QueryProps {
    page: number
    pageSize: number
    search: string | undefined
}

const usePhotos = (pexelQuery: QueryProps) => {
    return useQuery<Response, Error>({
        queryKey: ["data", pexelQuery],
        queryFn: () => 
            axios.get<Response>(`https://api.pexels.com/v1/search`, {
                headers: {
                    "Authorization": "Q8J3ZTX638nbDcYXRpKiF0ZUjapXO70Td3FDLvZnloHCEsH4YstCBlm1"
                },
                params: {
                    page: pexelQuery.page,
                    per_page: pexelQuery.pageSize,
                    query: pexelQuery.search || "buildings",
                }
            })
                .then(res => res.data),
        staleTime: 10 * 60 * 1000, // 10 secs,
        keepPreviousData: true
    })
}
export default usePhotos