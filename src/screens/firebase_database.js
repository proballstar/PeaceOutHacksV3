import { getDatabase, ref, set, get, child } from "firebase/database";

export function write(posts) {
  const db = getDatabase();
  set(ref(db, "posts/post"), {
    posts: JSON.stringify(posts)
  });
}

export function read() {
  const db = ref(getDatabase());
  get(child(db, `posts/post`)).then((snapshot) => {
    if (snapshot.exists()) {
      const val = snapshot.val();
      return val;
      console.log(val);
    } else {
      console.log("No DATA Availiable");
    }
  });
}
