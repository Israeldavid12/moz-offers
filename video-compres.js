const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);

function compressVideo(inputPath, outputPath) {
    console.log("Inciando compressao")
    return new Promise((resolve, reject) => {
        ffmpeg(inputPath)
            .outputOptions([
                "-vcodec libx264",   // codec eficiente H.264
                "-crf 28",           // fator de qualidade (0=lossless, 23=default, 28=mais leve)
                "-preset ultrafast",  // velocidade de compressão (ultrafast, superfast, veryfast, faster, fast, medium, slow, slower, veryslow)
                "-acodec aac",       // codec de áudio moderno
                "-b:a 128k",  // taxa de bits do áudio
                "-vf scale=1280:-2"

            ])
            .save(outputPath)
            .on("end", () => {
                console.log("Compressão concluída:", outputPath);
                resolve();
            })
            .on("error", (err) => {
                console.error("Erro na compressão:", err);
                reject(err);
            });
    });
}

// Exemplo de uso:
// compressVideo("input.mp4", "output.mp4");
