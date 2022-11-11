import { supabase } from "../../../supabase/client";

export const getClientBoxesService = async (email) => {
    const data = await supabase.from('contributors').select().eq('email', email)
    try {
        return data
    }
    catch (err) {
        console.error(err.message)
    }
}