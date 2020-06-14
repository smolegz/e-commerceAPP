import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyDSJTinzHtA8Lc7x_eni54JNCX96fHv_Gk",
	authDomain: "crown-db-6c63e.firebaseapp.com",
	databaseURL: "https://crown-db-6c63e.firebaseio.com",
	projectId: "crown-db-6c63e",
	storageBucket: "crown-db-6c63e.appspot.com",
	messagingSenderId: "715333634482",
	appId: "1:715333634482:web:cf13abf7d384a4ac867cab",
	measurementId: "G-3RXHPZH4YG",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	// console.log(userAuth);

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { email, displayName } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}

	return userRef;
};

// export const addCollectionAndDocuments = async (
// 	collectionKey,
// 	objectsToAdd
// ) => {
// 	const collectionRef = firestore.collection(collectionKey);

// 	const batch = firestore.batch();
// 	objectsToAdd.forEach((obj) => {
// 		const newDocRef = collectionRef.doc();
// 		batch.set(newDocRef, obj);
// 	});
// 	return await batch.commit();
// };

export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map((doc) => {
		const { title, items } = doc.data();

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items,
		};
	});

	return transformedCollection.reduce((accumualator, collection) => {
		accumualator[collection.title.toLowerCase()] = collection;
		return accumualator;
	}, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
