
export async function getTitanById(id) {
    try {
    const { name } = await $fetch(`https://api.attackontitanapi.com/titans/${id}`);
    return name;
} catch (error) {
    console.error("Error ao buscar Titan:", error);
    return null;
}
}
