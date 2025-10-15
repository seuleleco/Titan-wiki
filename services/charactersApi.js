export async function getCharacterByIds(ids = []) {
   const result = await Promise.all(
       ids.map(async (id) => {
        try{
            const { name } = await $fetch(`https://api.attackontitanapi.com/characters/${id}`);
            return { id, name }
        } catch (error) {
            console.error("Error ao buscar personagem:", error);
            return { id, name: null }
        }
       })
       
   )
   return result
}     