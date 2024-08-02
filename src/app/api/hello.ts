// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
interface handlerdata {
	req: any;
	res: any;
}

export default function handler({ req, res }: handlerdata) {
	res.status(200).json({ name: "John Doe" });
}
