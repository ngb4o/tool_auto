(() => {
    // Câu hỏi và đáp án
    const questions = {
        "Người bao nhiêu tuổi không được uống rượu, bia": "B",
        "Địa điểm nào dưới đây không được uống rượu bia": "D",
        "Trách nhiệm nào dưới đây thuộc Đoàn Thanh niên Cộng sản Hồ Chí Minh": "D",
        "Hành vi nào sau đây thuộc hành vi bị nghiêm cấm trong phòng, chống tác hại của rượu, bia?": "A",
        "Quy định nào sau đây là trách nhiệm của gia đình trong việc phòng, chống tác hại của rượu, bia?": "C",
        "Độ tuổi bị áp dụng biện pháp xử lý hành chính đưa vào cơ sở cai nghiện bắt buộc là bao nhiêu?": "D",
        "Theo quy định của Bộ luật Hình sự, tội vận chuyển trái phép chất ma túy thì bị xử phạt phạt tù thấp nhất là….?": "C",
        "Theo Luật Phòng, chống ma túy năm 2021 thì Chất ma túy là?": "B",
        "Theo Luật Phòng, chống ma túy năm 2021 thì Người sử dụng trái phép chất ma túy là?": "A",
        "Theo Luật Phòng, chống ma túy năm 2021 thì Cây có chứa chất ma túy là?": "B",
        "Tổ chức thanh niên gồm:": "C",
        "Thanh niên là công dân Việt Nam?": "A",
        "Chủ tịch UBND các cấp phải tổ chức đối thoại với thanh niên như thế nào?": "D",
        "Theo Luật Thanh niên 2020 quy định Thanh niên xung phong là?": "A",
        "Theo Luật biển Việt Nam năm 2012, trong lãnh hải Việt Nam, tàu thuyền của tất cả các quốc gia được hưởng quyền gì?": "C",
        "Theo Luật biển Việt Nam năm 2012, chủ thể nào có quyền tài phán đối với các đảo nhân tạo và thiết bị, công trình trên biển thuộc vùng đặc quyền kinh tế và thềm lục địa Việt Nam?": "B",
        "Theo Luật Biển Việt Nam, nội thủy là:": "A",
        "Theo Luật Biển Việt Nam, lãnh hải là:": "B",
        "Theo Luật Biển Việt Nam, vùng đặc quyền kinh tế là:": "A",
        "Độ tuổi đăng ký nghĩa vụ quân sự lần đầu đối với công dân nam là:": "B",
        "Công dân hoàn thành nhiệm vụ tham gia Công an xã liên tục từ đủ bao tháng trở lên thì được công nhận hoàn thành nghĩa vụ quân sự tại ngũ trong thời bình?": "C",
        "Hành vi không chấp hành lệnh gọi kiểm tra, khám sức khỏe nghĩa vụ quân sự thì bị xử phạt tiền như thế nào?": "D",
        "Người được khám sức khỏe có hành vi gian dối làm sai lệch kết quả phân loại sức khỏe của mình nhằm trốn tránh nghĩa vụ quân sự thì bị xử phạt tiền như thế nào?": "D",
        "Độ tuổi gọi nhập ngũ trong thời bình?": "B",
        "Trong Luật bình đẳng giới, “giới” được hiểu như sau:": "A",
        "Những trách nhiệm của công dân trong việc thực hiện và bảo đảm bình đẳng giới:": "D",
        "Điều kiện về độ tuổi kết hôn?": "B",
        "Luật Phòng, chống bạo lực gia đình năm 2022 có hiệu lực thi hành kể từ ngày:": "D",
        "Theo Luật Phòng, chống bạo lực gia đình năm 2022, “bạo lực gia đình” là?": "C",
        "Chọn phương án đúng:": "C",
        "Tội hiếp dâm là gì?": "A",
        "Căn cứ vào tính chất và mức độ nguy hiểm cho xã hội của hành vi phạm tội được quy định trong Bộ luật Hình sự, tội phạm được phân thành mấy loại?": "B",
        "Không áp dụng hình phạt tử hình đối với người thực hiện hành vi phạm tội là?": "D",
        "Tình tiết nào sau đây là tình tiết giảm nhẹ trách nhiệm hình sự?": "D",
        "Có bao nhiêu hành vi bị nghiêm cấm về an ninh mạng?": "D",
        "Tội phạm mạng là": "D",
        "An ninh mạng là": "A",
        "Luật An ninh mạng nghiêm cấm việc sử dụng không gian mạng để thực hiện hành vi nào dưới đây": "C",
        "Người có hành vi vi phạm được quy định trong  Luật An ninh mạng thì bị xử lý như thế nào?": "A",
        "Đường bộ gồm:": "C",
        "“Người tham gia giao thông đường bộ” là những ai?": "D",
        "Người tham gia giao thông phải đi như thế nào là đúng quy tắc giao thông? ": "D",
        "Người điều khiển phương tiện giao thông không uống rượu, bia trong trường hợp nào dưới đây?": "A",
        "Trên đường có nhiều làn đường cho xe đi cùng chiều được phân biệt bằng vạch kẻ phân làn đường, người điều khiển phương tiện phải cho xe đi như thế nào là dúng quy định?": "C",
        "Người điều khiển, người ngồi trên xe mô tô, xe gắn máy, xe máy điện và xe đạp máy khi tham gia giao thông đội mũ bảo hiểm nhưng không cài quai đúng qui cách có bị xử lý không?": "B",
        "Nội dung nào dưới đây không phản ánh đúng về tác hại của bạo lực học đường?": "D",
        "Nếu nhìn thấy tình trạng các bạn học sinh đang đánh nhau, em nên lựa chọn cách ứng xử nào dưới đây?": "D",
        "Bố mẹ C thường xuyên vắng nhà vì công việc bận rộn, không chăm sóc và quan tâm C. Do đó, C kết bạn với các đối tượng xấu và nhiều lần tụ tập gây gổ đánh nhau. Một lần, C cho rằng bạn học cùng lớp nói xấu mình nên đã dẫn người chặn đường đánh khiến bạn đó bị thương nặng. Trong trường hợp trên, nguyên nhân khách quan nào dẫn đến hành vi bạo lực học đường của bạn C?": "C",
        "Chúng ta cần làm gì để ngăn chặn tình trạng bạo lực học đường?": "D",
        "Điền từ thích hợp vào chỗ trống (….) trong đoạn văn bản dưới đây:": "C",

    };

    // Trích xuất câu hỏi và tìm đáp án
    const pageQuestions = document.querySelectorAll('.question:not(.hidden)'); // Exclude hidden questions

    pageQuestions.forEach((pageQuestion) => {
        const questionTitleElement = pageQuestion.querySelector('.question-title');
        if (questionTitleElement) {
            const questionText = questionTitleElement.innerText.trim();
            const answer = findAnswer(questionText, questions);
            if (answer) {
                const options = pageQuestion.querySelectorAll('input[type="radio"]');
                options.forEach((option) => {
                    const optionValue = option.getAttribute('data-alternatevalue');
                    if (optionValue === answer) {
                        option.click(); // Click vào radio button tương ứng
                    }
                });
            }
        }
    });

    function findAnswer(questionText, questions) {
        for (const [question, answer] of Object.entries(questions)) {
            if (questionText.includes(question)) {
                return answer;
            }
        }
        return null;
    }
})();
