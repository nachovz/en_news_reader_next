const yoastProcess = (yoast_meta) => {
  return yoast_meta.reduce( ( final, meta) => {
    final[(meta.name || meta.property || 'key')] = (meta.content || 'value');
    return final;
  }, {} );
};

export default yoastProcess;