const errorHandler = (response, err) => {
        if(err?.message?.includes("duplicate key")){
        return response.status(409).json({
            success: false,
            message: "Error duplicate key!",
        })
    }
}