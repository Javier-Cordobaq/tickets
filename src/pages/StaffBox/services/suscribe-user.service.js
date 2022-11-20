import { supabase } from "../../../supabase/client";

export const suscribeUserService = async () => {
    const channel = supabase
        .channel('shifts')
        .on('UPDATE', (payload) => console.log(payload, 'SUSCRIBE'))
        .subscribe()
}