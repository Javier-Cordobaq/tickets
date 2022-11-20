import { supabase } from "../../../supabase/client";

export const getTicketsService = async (id) => {
    const data = await supabase.from('shifts').select().eq("userId", id).or('state.eq.sin atender,state.eq.en proceso')
    try {
        if (data.data.length !== 0) {
            return data
        } else {
            return null
        }
    }
    catch (err) {
        console.error(err.message)
    }
}