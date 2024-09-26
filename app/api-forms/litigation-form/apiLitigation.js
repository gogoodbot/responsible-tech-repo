import supabase from '../supabaseClient';

export async function getLitigation() {
  const { data, error } = await supabase.from('Litigation').select('*');

  if (error) {
    console.log(error);
    throw new Error("Litgigation couldn't be loaded");
  }

  console.log('data: ', data);
  return data;
}

export async function deleteLitigation(id) {
  console.log(id);
  const { data, error } = await supabase
    .from('Litigation')
    .delete()
    .eq('litigation_id', id);

  if (error) {
    console.log(error);
    throw new Error("Litgigation couldn't be deleted");
  }

  console.log('data: ', data);
  return data;
}
