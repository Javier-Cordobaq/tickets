import { supabase } from "../../../supabase/client";

export const addCashierService = async (cashier) => {
    console.log(cashier.email)
    const { error } = await supabase
        .from('contributors')
        .insert(cashier)
}
