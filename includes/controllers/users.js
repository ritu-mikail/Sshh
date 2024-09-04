module.exports = function ({ models, api }) {
	const Users = models.use('Users');

	// Function to get user information
	async function getInfo(id) {
		return (await api.getUserInfo(id))[id];
	}

	// Function to get the user's name, with a fallback to a generic name
	async function getNameUser(id) {
		try {
			if (global.data.userName.has(id)) {
				return global.data.userName.get(id);
			} else if (global.data.allUserID.includes(id)) {
				const nameUser = (await this.getData(id)).name;
				if (nameUser) {
					return nameUser;
				} else {
					return "Dear User"; // Fallback: Generic name
				}
			} else {
				return "Dear User"; // Fallback: Generic name
			}
		} catch {
			return "Dear User"; // Fallback in case of an error
		}
	}

	// Function to get all users based on specific conditions
	async function getAll(...data) {
		var where, attributes;
		for (const i of data) {
			if (typeof i != 'object') throw global.getText("users", "needObjectOrArray");
			if (Array.isArray(i)) attributes = i;
			else where = i;
		}
		try {
			return (await Users.findAll({ where, attributes })).map(e => e.get({ plain: true }));
		} catch (error) {
			console.error(error);
			throw new Error(error);
		}
	}

	// Function to get data for a specific user
	async function getData(userID) {
		try {
			const data = await Users.findOne({ where: { userID } });
			if (data) return data.get({ plain: true });
			else return false;
		} catch(error) {
			console.error(error);
			throw new Error(error);
		}
	}

	// Function to set data for a specific user
	async function setData(userID, options = {}) {
		if (typeof options != 'object' && !Array.isArray(options)) throw global.getText("users", "needObject");
		try {
			(await Users.findOne({ where: { userID } })).update(options);
			return true;
		} catch (error) {
			try {
				await this.createData(userID, options);
			} catch (error) {
				console.error(error);
				throw new Error(error);
			}
		}
	}

	// Function to delete data for a specific user
	async function delData(userID) {
		try {
			(await Users.findOne({ where: { userID } })).destroy();
			return true;
		} catch (error) {
			console.error(error);
			throw new Error(error);
		}
	}

	// Function to create data for a specific user
	async function createData(userID, defaults = {}) {
		if (typeof defaults != 'object' && !Array.isArray(defaults)) throw global.getText("users", "needObject");
		try {
			await Users.findOrCreate({ where: { userID }, defaults });
			return true;
		} catch (error) {
			console.error(error);
			throw new Error(error);
		}
	}

	// Return all functions for use
	return {
		getInfo,
		getNameUser,
		getAll,
		getData,
		setData,
		delData,
		createData
	};
};
