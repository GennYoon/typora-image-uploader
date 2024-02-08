require("dotenv").config({ path: __dirname + "/.env" });
const fs = require("fs");
const { createClient } = require("@supabase/supabase-js");

const images = process.argv.slice(2);

const supabase_url = process.env.SUPABASE_URL;
const supabase_key = process.env.SUPABASE_KEY;
const supabase_bucket = process.env.SUPABASE_BUCKET;

async function run() {
  const supabase = createClient(supabase_url, supabase_key);

  const filename = images[0].split("/").pop();
  const extension = filename.split(".").pop();
  const image_file = await fs.readFileSync(images[0]);

  var { data, error } = await supabase.storage
    .from(supabase_bucket)
    .upload(`${filename}`, image_file, {
      cacheControl: "3600",
      upsert: true,
      contentType: `image/${extension}`,
    });

  return `${supabase_url}/storage/v1/object/public/${supabase_bucket}/${filename}`;
}

run().then((urls) => console.log(urls));
