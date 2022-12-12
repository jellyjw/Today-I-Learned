// POST /book에서 사용할 uuid입니다.
const { v4: uuid } = require("uuid");
// 항공편 예약 데이터를 저장합니다.
let booking = [];

module.exports = {
  // [GET] /book 요청을 수행합니다.
  // 전체 예약 데이터를 조회합니다.
  findAll: (req, res) => {
    return res.status(200).json(booking);
  },
  // [GET] /book/:phone 요청을 수행합니다.
  // 요청 된 phone과 동일한 phone 예약 데이터를 조회합니다.
  findByPhone: (req, res) => {
    const { phone } = req.params;
    // 필터로 파람으로 들어온 폰과 같은 예약만 조회
    const data = booking.filter((book) => {
      return book.phone === phone;
    });
    return res.json(data);
  },
  // [GET] /book/:phone/:flight_uuid 요청을 수행합니다.
  // 요청 된 id, phone과 동일한 uuid, phone 예약 데이터를 조회합니다.
  findByPhoneAndFlightId: (req, res) => {
    const { phone, flight_uuid } = req.params;
    // TODO:
    const data = booking.filter((book) => {
      return book.flight_uuid === flight_uuid && book.phone === phone;
    });
    return res.json(data);
  },
  // [POST] /book 요청을 수행합니다.
  // 요청 된 예약 데이터를 저장합니다.
  create: (req, res) => {
    // POST /book에서 사용할 booking_uuid입니다.
    const booking_uuid = uuid();
    // TODO:
    const { flight_uuid, name, phone } = req.body;
    if (
      booking.find(
        (book) =>
          book.phone === phone &&
          book.flight_uuid === flight_uuid &&
          book.name === name
      )
    ) {
      return res.json("이미 예약이 되었습니다.");
    } else {
      const booking_data = {
        booking_uuid,
        // ...req.body,
        flight_uuid: req.body.flight_uuid,
        name: req.body.name,
        phone: req.body.phone,
      };
      booking.push(booking_data);
      return res.json(booking_data);
    }
  },

  // Optional
  // [DELETE] /book/:booking_uuid 요청을 수행합니다.
  // 요청 된 id, phone 값과 동일한 예약 데이터를 삭제합니다.
  deleteByBookingId: (req, res) => {
    const { booking_uuid } = req.params;
    // TODO:
    const deleteBooking = booking.filter((book) => {
      return book.booking_uuid !== booking_uuid;
    });
    return res.json(deleteBooking);
  },
};
