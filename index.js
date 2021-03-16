const bcrypt=require('bcryptjs');
const input="pokemonAdvanceBattle";

const securePassword= async (password)=>{
    // password hashing
    const passwordHash= await bcrypt.hash(password,12);
    console.log(passwordHash);

    //compare
    const passwordMatch= await bcrypt.compare(password,passwordHash);
    console.log(passwordMatch);
}


securePassword(input)
