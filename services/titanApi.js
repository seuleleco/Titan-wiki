export async function getTitanByIds(ids = []) {
   const result = await Promise.all(
       ids.map(async (id) => {
        try{
            const data = await $fetch(`https://api.attackontitanapi.com/titans/${id}`);
            return data
        } catch (error) {
            console.error("Error ao buscar titan:", error);
            return { id, error: true  }
        }
       })
       
   )
   return result
}     



// export async function getTitanById(id) {
//     try {
//     const { name } = await $fetch(`https://api.attackontitanapi.com/titans/${id}`);
//     return name;
// } catch (error) {
//     console.error("Error ao buscar Titan:", error);
//     return null;
// }
// }
