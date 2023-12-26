import { BASE_URL } from "./baseUrl"
import { commonApi } from "./commonStructure"






export const addVideoApi = async(bodyData)=>{
    return await commonApi('POST',`${BASE_URL}/videos`,bodyData)
}

export const getVideosApi = async()=>{
    return await commonApi('GET',`${BASE_URL}/videos`,{})
}

export const deleteVideosApi = async(id)=>{
    return await commonApi('DELETE',`${BASE_URL}/videos/${id}`)
}



export const addCategoryApi = async(bodyData)=>{
    return await commonApi('POST',`${BASE_URL}/categories`,bodyData)
}

export const getCategoriesApi = async()=>{
    return await commonApi('GET',`${BASE_URL}/categories`,{})
}

export const deleteCategoriesApi = async(id)=>{
    return await commonApi('DELETE',`${BASE_URL}/categories/${id}`)
}
