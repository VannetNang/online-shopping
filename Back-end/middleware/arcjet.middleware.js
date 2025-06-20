import aj from "../config/arcjet.js";

const arcjetMiddleware = async (req, res, next) => {
  try {
    const decision = await aj.protect(req, { requested: 1 });

    console.log("Arcjet decision:", decision);

    if (decision.isDenied()) {
      if (decision.reason.isBot())
        return res.status(403).json({ message: "Forbidden! Bot detected..." });

      if (decision.reason.isRateLimit())
        return res
          .status(429)
          .json({ message: "Rate limited! Too many requests..." });

      return res.status(403).json({ message: "Access denied!" });
    }
  } catch (error) {
    console.log(`Arcjet error: ${error.message}`);
    next(error);
  }
};

export default arcjetMiddleware;
