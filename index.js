/* eslint-disable no-unused-vars */
const EventEmitter = require('events');
// const axios = require('axios');
const base_url = ('https://fateslist.xyz');
class FatesList extends EventEmitter {
/**
 *
 * @param {string} api_token The token for FatesList API
 * @param {boolean} postshards If you want to post shards
 * @param {any} client Your client
 */
	constructor(api_token, postshards, client) {
		super();
		this.api = api_token;
		this.postshards = postshards;
		this.client = client;
		let library;
		let lib;
		try {
			library = require('discord.js');
			lib	= 'discord.js';
		}
		catch {
			//
		}
		if (!library) {
			try {
				library = require('eris');
				lib = 'eris';
			}
			catch {
				// do nothing
			}
		}
		if (!library) {
			throw new Error ('[FatesList] You dont have a compatible library (eris or discord.js). Pls use our other API (https://npmjs.com/package/FatesClient) or make your own requests.');
		}
		if (library && (lib == 'discord.js')) {
			console.log(this.client.guilds.cache.size);
			// const guildcount = this.defineclientas.guilds.cache.size | this.defineclientas.guilds.size;
			// console.log(guildcount);
			/*	axios({
				method: 'put',
				url: `${base_url}/api/events`,
				data: {
					'api_token': this.api_token,
					'event': 'guild_count',
					'context': guildcount,
				},
			});
			this.emit('postguildcount'); */
		}
	}
}
module.exports = FatesList;