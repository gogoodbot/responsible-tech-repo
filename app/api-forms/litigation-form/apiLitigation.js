import supabase from '../supabaseClient';

export async function getLitigation(id) {
  const { data, error } = await supabase
    .from('Litigation')
    .select('*')
    .eq('litigation_id', id);

  if (error) {
    console.log(error);
    throw new Error("Litigation couldn't be loaded");
  }

  console.log('fetched data from apiLitigation: ', data);
  return data;
}

export async function updateLitigation(modifiedLitigation) {
  const { data, error } = await supabase
    .from('Litigation')
    .update(modifiedLitigation)
    .eq('litigation_id', modifiedLitigation.id)
    .select();

  if (error) {
    console.log(error);
    throw new Error("Litgigation couldn't be updated");
  }

  console.log('updated data: ', data);
  return data;
}

export async function createLitigation(newLitigation) {
  const { data, error } = await supabase
    .from('Litigation')
    .insert([newLitigation])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Litgigation couldn't be created");
  }

  console.log('created data: ', data);
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

  console.log('deleted data: ', data);
  return data;
}
