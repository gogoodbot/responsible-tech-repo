const submitToLitigation = async (formData) => {
  const { data, error } = await supabase.from('litigation').insert([formData]);

  if (error) {
    throw error;
  }

  return data;
};

const submitToOrganization = async (formData) => {
  const { data, error } = await supabase
    .from('organization')
    .insert([formData]);

  if (error) {
    throw error;
  }

  return data;
};

const submitToPolicy = async (formData) => {
  const { data, error } = await supabase.from('policy').insert([formData]);

  if (error) {
    throw error;
  }

  return data;
};

const submitToResource = async (formData) => {
  const { data, error } = await supabase.from('resource').insert([formData]);

  if (error) {
    throw error;
  }

  return data;
};

const submitToStakeholder = async (formData) => {
  const { data, error } = await supabase.from('stakeholder').insert([formData]);

  if (error) {
    throw error;
  }

  return data;
};
